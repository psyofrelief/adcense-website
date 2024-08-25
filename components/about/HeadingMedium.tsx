interface MyComponentProps {
  children: React.ReactNode;
}

export default function HeadingMedium({ children }: MyComponentProps) {
  return <h3 className="font-bold text-xl">{children}</h3>;
}
