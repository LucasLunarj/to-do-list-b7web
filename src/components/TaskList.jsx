export const TaskList = (props) => {
  console.log(props.taskData);
  return (
    <div className="pt-5">
      <li className="flex gap-8">
        <p>{props.taskData}</p>
        <button className="border-2 border-solid border-red-700 rounded-lg px-1">
          Remove
        </button>
      </li>
    </div>
  );
};
