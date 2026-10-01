const SPACING = {
  default: 'px-[5%]',
  more: 'px-[15%]',
  less: 'px-[5%]',
  none: 'px-0',
};

export default function Container({
  spacing = 'default',
  className = '',
  as: Tag = 'div',
  children,
}) {
  const spacingClass = SPACING[spacing] || SPACING.default;
  return <Tag className={`w-full ${spacingClass} ${className}`}>{children}</Tag>;
}