interface MyComponentProps {
  children: React.ReactNode;
}

export default function HeadingMedium({ children }: MyComponentProps) {
  return <h3 className="font-bold text-xl mt-10 mb-2">{children}</h3>;
}
