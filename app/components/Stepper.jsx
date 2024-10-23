

const Stepper = ({steps, currentStep}) => {

  return (
    <div className="w-full flex justify-center items-center p-6 bg-purple-100">
    <div className="flex justify-between items-center w-full max-w-4xl">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex flex-col items-center">
            {/* Circle with check or step number */}
            <div
              className={`${
                step.completed
                  ? 'bg-red-500 text-white'
                  : 'bg-pink-200 text-gray-500'
              } w-12 h-12 rounded-full flex justify-center items-center`}
            >
              {step.completed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <span className="text-lg">{index + 1}</span>
              )}
            </div>

            {/* Step label */}
            <div className="text-sm mt-2 font-medium">
              {step.label}
            </div>
          </div>

          {/* Dashed Line between steps */}
          {index < steps.length - 1 && (
            <div className="flex-1 mx-4">
              <div className="border-t-2 border-dashed border-gray-400 h-0" />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Stepper;
