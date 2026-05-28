interface ListElementProps {
  text: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  iconColor?: string;
  bgColor?: string;
}

const ListElement = ({
  text,
  description,
  icon,
  iconColor,
  bgColor,
}: ListElementProps) => {
  return (
    <div className="listElement">
      <div className="icon" style={bgColor ? { backgroundColor: bgColor } : {}}>
        {icon}
      </div>
      <div className="content">
        <h2>{text}</h2> <p>{description}</p>
      </div>
    </div>
  );
};

export default ListElement;
