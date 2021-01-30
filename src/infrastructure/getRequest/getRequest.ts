export default function getRequest() {
  fetch("https://knowledge-tree.herokuapp.com/api/v1/titles/")
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
}
