let themeColors = {
  simple: {
    primary: "#007be8",
    complete: "#007be8",
    success: "#007be8",
    danger: "#ea2c54",
  },
  casual: {
    primary: "#00a46c",
    complete: "#14a1c8",
    success: "#00a46c",
    danger: "#d13030",
  },
  corporate: {
    primary: "#6d5eac",
    complete: "#37b0e9",
    success: "#1dbb99",
    danger: "#f35958",
  },
  condensed: {
    primary: "#7252d3",
    complete: "#0072ec",
    success: "#19ad79",
    danger: "#d83c31",
  },
};

export function getChartRealtimeColor() {
  if (location.pathname.includes("/casual")) {
    return themeColors.casual.primary;
  } else if (location.pathname.includes("/simple")) {
    return themeColors.simple.primary;
  } else if (location.pathname.includes("/corporate")) {
    return themeColors.corporate.success;
  } else {
    return themeColors.condensed.success;
  }
}

export function getChartBarColor() {
  if (location.pathname.includes("/casual")) {
    return themeColors.casual.primary;
  } else if (location.pathname.includes("/simple")) {
    return themeColors.simple.primary;
  } else if (location.pathname.includes("/corporate")) {
    return themeColors.corporate.complete;
  } else {
    return themeColors.condensed.primary;
  }
}

export function getLineChartColors() {
  if (location.pathname.includes("/casual")) {
    return [
      themeColors.casual.primary,
      themeColors.casual.danger,
      themeColors.casual.complete,
    ];
  } else if (location.pathname.includes("/simple")) {
    return [
      themeColors.simple.primary,
      themeColors.simple.danger,
      themeColors.simple.primary,
    ];
  } else if (location.pathname.includes("/corporate")) {
    return [
      themeColors.corporate.success,
      themeColors.corporate.danger,
      themeColors.corporate.complete,
    ];
  } else {
    return [
      themeColors.condensed.success,
      themeColors.condensed.danger,
      themeColors.condensed.complete,
    ];
  }
}

export function getChartAreaColor() {
  if (location.pathname.includes("/casual")) {
    return themeColors.casual.primary;
  } else if (location.pathname.includes("/simple")) {
    return themeColors.simple.primary;
  } else if (location.pathname.includes("/corporate")) {
    return themeColors.corporate.complete;
  } else {
    return themeColors.condensed.primary;
  }
}
