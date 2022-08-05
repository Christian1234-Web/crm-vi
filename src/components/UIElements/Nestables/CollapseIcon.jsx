const CollapseIcon = ({ isCollapsed }) => {
  return !isCollapsed ? (
    <i className="pg-icon nestable-icon">chevron_down</i>
  ) : (
    <i className="pg-icon nestable-icon">chevron_right</i>
  );
};

export default CollapseIcon;
