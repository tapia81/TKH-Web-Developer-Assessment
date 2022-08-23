export const RenderEditArea = ({
  handleInputChange,
  updateTask,
  isEditRendered,
  editId,
  handleDisplayChange,
  resetForm,
}) => {
  return (
    <div className="edit-modal" style={{ display: `${isEditRendered}` }}>
      <div className="edit-submission">
        <textarea
          className="textarea"
          name="taskDescription"
          placeholder="e.g. Hello world"
          defaultValue={resetForm}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
        <div className="field is-grouped">
          <p className="control">
            <button
              className="button is-primary"
              onClick={(e) => {
                updateTask(editId);
              }}
            >
              Submit
            </button>
          </p>
          <p className="control">
            <button
              className="button is-light"
              onClick={(e) => handleDisplayChange(e)}
            >
              Cancel
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
