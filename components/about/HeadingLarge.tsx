interface MyComponentProps {
  children: React.ReactNode;
}

export default function HeadingLarge({ children }: MyComponentProps) {
  return <h2 className="text-2xl font-bolder ">{children}</h2>;
}
