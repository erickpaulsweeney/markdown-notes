import { Badge } from "react-bootstrap";

type TagBadgeProps = {
  id: string;
  label: string;
};

const TagBadge = ({ id, label }: TagBadgeProps) => {
  return (
    <Badge key={id} className="text-truncate">
      {label}
    </Badge>
  );
};

export default TagBadge;
