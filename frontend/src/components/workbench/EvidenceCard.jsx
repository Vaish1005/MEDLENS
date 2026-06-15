export default function EvidenceCard({

  evidence,

  setSelectedSource

}) {

  return (

    <div className="border border-slate-800 rounded-xl p-5">

      <h2 className="text-lg font-semibold">

        Evidence Sources

      </h2>

      <div className="mt-4 space-y-3">

        {

          evidence.length > 0

          ?

          evidence.map((item,index)=>(

            <div

              key={index}

              onClick={() =>
                setSelectedSource(item)
              }

              className="
                border
                border-slate-800
                rounded-lg
                p-3
                bg-slate-900
                cursor-pointer
                hover:border-cyan-500
                transition
              "

            >

              <p className="font-medium">

                {item.source}

              </p>

              <p className="text-xs text-slate-500 mt-1">

                Similarity:

                {

                  Number(item.score)

                  .toFixed(2)

                }

              </p>

              <p className="text-xs text-slate-400 mt-2 line-clamp-5 overflow-hidden">

                {item.preview}

              </p>

            </div>

          ))

          :

          <p className="text-slate-500">

            No evidence loaded

          </p>

        }

      </div>

    </div>

  );

}