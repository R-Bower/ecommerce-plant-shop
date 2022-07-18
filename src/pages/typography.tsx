import {sx} from "../styles/sx.css"

export default function TypographyPage() {
  return (
    <>
      <div
        className={sx({
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        })}
      >
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Paragraph</p>
        <div className={sx({display: "flex"})}>
          <button
            className={sx({
              display: "flex",
            })}
          >
            Button
          </button>
        </div>
      </div>
    </>
  )
}
