export const badgeVariants = {
  status: {
    completed: {
      icon: "",
      className: "bg-badge-background-completed text-badge-text-completed",
    },
    pending: {
      icon: "",
      className: "bg-badge-background-pending text-badge-text-pending",
    },
    overdue: {
      icon: "",
      className: "",
    },
  },

  priority: {
    low: {
      className: "bg-[#f3f4f6] text-[#4b5563]",
      icon: "low_priority",
    },
    medium: {
      className: "bg-[#e7eafa] text-[#7167d2]",
      icon: "assignment_late",
    },
    high: {
      className: "bg-[#fee2e2] text-[#b91c1c]",
      icon: "local_fire_department",
    },
  },

  category: {
    work: {
      className: "bg-[#dbeafe] text-[#1d4ed8]",
      icon: "work",
    },
    personal: {
      className: "bg-[#f4eafa] text-[#9d56d5]",
      icon: "person",
    },
    study: {
      className: "bg-[#ccfbf1] text-[#2c766e]",
      icon: "school",
    },
    other: {
      className: "bg-[#f3f4f6] text-[#4b5563]",
      icon: "apps",
    },
  },
};
