interface MyComponentProps {
  children: React.ReactNode;
}

export default function HeadingLarge({ children }: MyComponentProps) {
  return <h2 className="text-2xl font-bolder mt-10">{children}</h2>;
}
