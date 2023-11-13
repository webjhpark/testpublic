interface ButtonProps {
  children: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
};
