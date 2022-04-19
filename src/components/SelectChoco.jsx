import { CanvasContext } from "../CanvasContext";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ChocoEnum } from "../ChocoEnum";

const SelectChoco = () => {
  /// white, black, golden-white, golden-black
  const [selectedChoco, setSelectedChoco] = useState(ChocoEnum.white);
  const canvas = React.useContext(CanvasContext);

  useEffect(() => {
    canvas?.renderAll();
  }, [canvas, selectedChoco]);

  const onChangeChoco = (newChoco) => {
    canvas.backgroundColor = newChoco.color;
    setSelectedChoco(newChoco);
  };

  const onAddGolden = () => {
    const hasGolden = !!selectedChoco.name.includes("golden");
    if (hasGolden) {
      if (selectedChoco === ChocoEnum.goldenWhite) {
        canvas.backgroundColor = ChocoEnum.white.color;
        setSelectedChoco(ChocoEnum.white);
      } else if (selectedChoco === ChocoEnum.goldenBlack) {
        canvas.backgroundColor = ChocoEnum.black.color;
        setSelectedChoco(ChocoEnum.black);
      }
    } else {
      if (selectedChoco === ChocoEnum.white) {
        canvas.backgroundColor = ChocoEnum.goldenWhite.color;
        setSelectedChoco(ChocoEnum.goldenWhite);
      } else if (selectedChoco === ChocoEnum.black) {
        canvas.backgroundColor = ChocoEnum.goldenBlack.color;
        setSelectedChoco(ChocoEnum.goldenBlack);
      }
    }
  };

  return (
    <div>
      <h1>Select your Chocolate </h1>
      {selectedChoco.name}
      <Button
        onClick={() =>
          onChangeChoco(
            selectedChoco.name.includes("golden")
              ? ChocoEnum.goldenWhite
              : ChocoEnum.white
          )
        }
      >
        White
      </Button>
      <Button
        onClick={() =>
          onChangeChoco(
            selectedChoco.name.includes("golden")
              ? ChocoEnum.goldenBlack
              : ChocoEnum.black
          )
        }
      >
        Black
      </Button>
      <Button onClick={() => onAddGolden()}>add Golden</Button>
    </div>
  );
};

export default SelectChoco;
