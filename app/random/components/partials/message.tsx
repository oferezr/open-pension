'use client';

interface Props {
  content: string;
}

export default function Message({ content }: Props) {
  return (
    <div className="row">
      <div className="item">
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  )
}
