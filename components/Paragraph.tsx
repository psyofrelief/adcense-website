interface MyComponentProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: MyComponentProps) {
  return <p className="text-lg font-light">{children}</p>;
}
