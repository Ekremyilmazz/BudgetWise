interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const TransactionFilter: React.FC<Props> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value=""> All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default TransactionFilter;
