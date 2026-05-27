const ListElement = ({
  text,
  description,
}: {
  text: string;
  description: string;
}) => {
  return (
    <div>
      <h2>{text}</h2> <p>{description}</p>
    </div>
  );
};

export default ListElement;
