export default function getUserCategories() {
  return fetch("https://knowledge-tree.herokuapp.com/api/v1/titles/")
    .then(res => res.json())
    .then(res => {
      return res;
    });
}
