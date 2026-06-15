export default function SourceViewerModal({

  source,
  onClose

}) {

  if (!source) return null;

  return (

    <div className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-50
    ">

      <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        p-6
        w-[800px]
        max-h-[80vh]
        overflow-y-auto
      ">

        <div className="
          flex
          justify-between
          items-center
          mb-6
        ">

          <h2 className="text-xl font-bold">

            Source Viewer

          </h2>

          <button
            onClick={onClose}
            className="text-slate-400"
          >

            ✕

          </button>

        </div>

        <div className="space-y-4">

          <p>

            <strong>Source:</strong>

            {source.source}

          </p>

          <p>

            <strong>Similarity:</strong>

            {source.score}

          </p>

          <div className="
            bg-slate-950
            p-4
            rounded-lg
          ">

            {source.preview}

          </div>

        </div>

      </div>

    </div>

  );
}