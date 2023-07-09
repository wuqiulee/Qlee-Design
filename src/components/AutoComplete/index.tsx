import React, {
  FC,
  useState,
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import classNames from 'classnames';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Input, { InputProps } from '../Input';
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';
import Icon from '../Icon';

interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect' | 'onChange'> {
  fetchData: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchData, onSelect, value, renderOption, ...restProps } = props;
  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSugestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const debouncedValue = useDebounce(inputValue, 300);

  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setShowDropdown(false);
    if (onSelect) {
      onSelect(item);
    }
    triggerSearch.current = false;
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      case 38:
        highlight(highlightIndex - 1);
        break;
      case 40:
        highlight(highlightIndex + 1);
        break;
      case 27:
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };
  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const generateDropdown = () => {
    return suggestions.length ? (
      <ul className="suggestion_list">
        {loading && (
          <div className="suggstions_loading_icon">
            <Icon icon={faSpinner} spin />
          </div>
        )}
        {suggestions.map((item, index) => {
          const cnames = classNames('suggestion_item', {
            is_active: index === highlightIndex,
          });
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className={cnames} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          );
        })}
      </ul>
    ) : null;
  };

  useClickOutside(componentRef, () => {
    setSugestions([]);
  });
  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      setSugestions([]);
      const results = fetchData(debouncedValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setLoading(false);
          setSugestions(data);
          if (data.length > 0) {
            setShowDropdown(true);
          }
        });
      } else {
        setSugestions(results);
        setShowDropdown(true);
        if (results.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(false);
    }
    setHighlightIndex(-1);
  }, [debouncedValue, fetchData]);

  return (
    <div className="auto_complete" ref={componentRef}>
      <Input value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} {...restProps} />
      {showDropdown && generateDropdown()}
    </div>
  );
};

export default AutoComplete;
