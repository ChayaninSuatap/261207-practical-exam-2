export default function PersonCard(props) {
  return (
    <div>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Gender</td>
            <td>Age</td>
          </tr>
          <tr>
            <td>{props.name}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
