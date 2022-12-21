import "./style.scss";

const Button = ({
  children,
  className,
  Component = "button",
  variant = "text",
  ...rest
}) => {
  return (
    <Component className={`button button-${variant} ${className}`} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
