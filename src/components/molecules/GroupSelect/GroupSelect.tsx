import { Row, Select } from 'antd';
import styles from './group-select.module.css';
import { Image } from '@/components/atoms/Image/Image';

interface GroupSelectProps {
  options: { value: string; label: string }[];
  label?: string;
  defaultValue?: string;
  value?: string;
  onChange: (value: string) => void;
}

export const GroupSelect: React.FC<GroupSelectProps> = ({
  label,
  onChange,
  options,
  value,
  defaultValue,
}) => {
  return (
    <Row className={styles.groupSelect}>
      {label ? <Row className={styles.groupSelectLabel}>{label}</Row> : <></>}
      <Row>
        <Select
          defaultValue={defaultValue}
          value={value}
          className={styles.groupSelectInput}
          onChange={onChange}
          options={options}
          suffixIcon={
            <Image
              style={{ width: 12, height: 12, marginRight: 6 }}
              src="/dropdown.svg"
              alt="dropdown-icon"
            />
          }
        />
      </Row>
    </Row>
  );
};
