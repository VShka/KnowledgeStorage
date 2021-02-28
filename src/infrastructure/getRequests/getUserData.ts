export default function getRequest() {
  return fetch("https://knowledge-tree.herokuapp.com/api/v1/titles/")
    .then(res => res.json())
    .then(res => {
      return res;
    });
}
