export default function SourceViewer({

  source,

  onClose

}) {

  if (!source) return null;

  return (

    <div
      className="
        fixed
        inset-0
        bg-black/60
        flex
        items-center
        justify-center
        z-50
      "
    >

      <div
        className="
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          p-6
          max-w-3xl
          w-full
          mx-4
          max-h-[80vh]
          overflow-y-auto
        "
      >

        <div
          className="
            flex
            justify-between
            items-center
            mb-6
          "
        >

          <h2
            className="
              text-2xl
              font-bold
            "
          >

            Evidence Source

          </h2>

          <button
            onClick={onClose}
            className="
              text-red-400
            "
          >

            Close

          </button>

        </div>

        <div className="space-y-4">

          <p>

            <strong>
              Source:
            </strong>

            {" "}
            {source.source}

          </p>

          <p>

            <strong>
              Similarity:
            </strong>

            {" "}
            {source.score}

          </p>

          <div
            className="
              border
              border-slate-700
              rounded-lg
              p-4
              text-slate-300
              whitespace-pre-wrap
            "
          >

            {source.full_text}

          </div>

        </div>

      </div>

    </div>

  );

}