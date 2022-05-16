import "./DataWidget.scss";

function DataWidget(props) {
  const { title, info } = props;

  return (
    <div className="data-widget">
      <div className="title">{title}</div>
      <div className="info">{info}</div>
    </div>
  );
}

export default DataWidget;
