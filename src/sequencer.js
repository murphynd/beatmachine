import * as Tone from 'tone'
import React from "react";

export class sequencer extends React.Component {

    state =
        {
            notes = ["F4", "Eb4", "C4", "Bb3", "Ab3", "F3"];
            grid = makeGrid(notes);
            beat = 0;
            playing = false;
            started = false;
        }

    makeSynths = (count) => {
        const synths = [];
        for (let i = 0; i < count; i++) {
            let synth = new Tone.Synth({
                                           oscillator: {
                                               type: "square8"
                                           }
                                       }).toDestination();

            synths.push(synth);
        }

        return synths;
    };

    makeGrid = (notes) => {

        const rows = [];

        for (const note of notes) {

            const row = [];

            for (let i = 0; i < 8; i++) {
                row.push({
                             note: note,
                             isActive: false
                         });
            }
            rows.push(row);
        }

        return rows;
    };

    configLoop = () => {

        const repeat = (time) => {
            grid.forEach((row, index) => {
                let synth = synths[index];
                let note = row[beat];
                if (note.isActive) {
                    synth.triggerAttackRelease(note.note, "8n", time);
                }
            });

            beat = (beat + 1) % 8;
        };

        Tone.Transport.bpm.value = 120;
        Tone.Transport.scheduleRepeat(repeat, "8n");
    };

    makeSequencer = () => {
        const sequencer = document.getElementById("sequencer");
        grid.forEach((row, rowIndex) => {
            const seqRow = document.createElement("div");
            seqRow.id = `rowIndex`;
            seqRow.className = "sequencer-row";

            row.forEach((note, noteIndex) => {
                const button = document.createElement("button");
                button.className = "note"
                button.addEventListener("click", function (e) {
                    handleNoteClick(rowIndex, noteIndex, e);
                });

                seqRow.appendChild(button);
            });

            sequencer.appendChild(seqRow);
        });
    };

    handleNoteClick = (clickedRowIndex, clickedNoteIndex, e) => {
        grid.forEach((row, rowIndex) => {
            row.forEach((note, noteIndex) => {
                if (clickedRowIndex === rowIndex && clickedNoteIndex === noteIndex) {
                    note.isActive = !note.isActive;
                    e.target.className = classNames(
                        "note",
                        {"note-is-active": !!note.isActive},
                        {"note-not-active": !note.isActive}
                    );
                }
            });
        });
    };


    configPlayButton = () => {
        const button = document.getElementById("play-button");
        button.addEventListener("click", (e) => {
            if (!started) {
                Tone.start();
                Tone.getDestination().volume.rampTo(-10, 0.001)
                configLoop();
                this.setState(started = true);
            }

            if (playing) {
                e.target.innerText = "Play";
                Tone.Transport.stop();
                this.setState(playing = false);
            } else {
                e.target.innerText = "Stop";
                Tone.Transport.start();
                this.setState(playing = true);
            }
        });
    };

    window.addEventListener("DOMContentLoaded", () => {
    configPlayButton();
    makeSequencer();
});
}