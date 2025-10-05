const direction = {
    left: "left",
    right: "right",
    bottom: "bottom",
    top: "top",
} as const;

// Numeric enum
enum Direction {
    top,
    right,
    bottom,
    left
} 


// String Enums
enum Tab {
    POPULAR = "POPULAR",
    RECENT = "RECENT",
    LATEST = "LATEST",
    NEW = "NEW"
}