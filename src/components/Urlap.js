import React, { useState, useContext } from "react"
import { UrlapContext } from "../contexts/UrlapContext"

export default function Urlap() {
    const [urlapAdat, setUrlapAdat] = useState({ todo: "", date: "2025-11-25" })
    const { listaba } = useContext(UrlapContext)

    function mezovalt(event) {
        let kulcs = event.target.id
        let ertek = event.target.value
        /* const sv = { ...urlapAdat }
        sv[kulcs] = ertek
        setUrlapAdat({ ...sv }) */
        setUrlapAdat({ ...urlapAdat, [kulcs]: ertek });
    }

    function kuldes(event) {
        event.preventDefault()
        console.log(urlapAdat)
        listaba(urlapAdat)
    }

    return (
        <div style={{ width: "50%", margin: "auto" }}>

            <form onSubmit={kuldes}>
                <div className="mb-3">
                    <label for="todo" className="form-label">Teendő</label>
                    <input type="text" className="form-control" id="todo" aria-describedby="todoHelp" value={urlapAdat.todo} onChange={mezovalt} />
                    <div id="todoHelp" className="form-text">Töltsd ki!</div>
                </div>

                <div class="mb-3 form-check">
                    <input type="date" class="form-check-input" id="date" value={urlapAdat.datum} onChange={mezovalt} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}