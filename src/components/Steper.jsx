import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SelectChoco from "./SelectChoco";

const Steper = () => {
  const [step, setStep] = useState(StepsEnum.selectChoco);

  const onPrevStep = (currentStep) => {
    switch (currentStep) {
      case StepsEnum.editChoco:
        setStep(StepsEnum.selectChoco);
        break;
      case StepsEnum.export:
        setStep(StepsEnum.editChoco);
        break;
      case StepsEnum.selectChoco:
      default:
        break;
    }
  };
  const onNextStep = (currentStep) => {
    switch (currentStep) {
      case StepsEnum.selectChoco:
        setStep(StepsEnum.editChoco);
        break;
      case StepsEnum.editChoco:
        setStep(StepsEnum.export);
        break;
      case StepsEnum.export:
      default:
        break;
    }
  };

  const renderCurrentStep = (currentStep) => {
    switch (currentStep) {
      case StepsEnum.selectChoco:
        return <SelectChoco />;
      case StepsEnum.editChoco:
        return <h1>{currentStep.name}</h1>;
      case StepsEnum.export:
        return <h1>{currentStep.name}</h1>;
      default:
        break;
    }
  };

  return (
    <div className="">
      <div>{renderCurrentStep(step)}</div>
      <div className="row">
        <div className="col-auto">
          <div className="d-grid gap-2">
            {step !== StepsEnum.selectChoco && (
              <Button
                variant="light"
                size="lg"
                onClick={() => onPrevStep(step)}
              >
                Back
              </Button>
            )}
          </div>
        </div>
        <div className="col">
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNextStep(step)}
            >
              {step !== StepsEnum.export ? "Next" : "Export"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

class StepsEnum {
  static selectChoco = new StepsEnum("selectChoco");
  static editChoco = new StepsEnum("editChoco");
  static export = new StepsEnum("export");

  constructor(name) {
    this.name = name;
  }
}
export default Steper;
