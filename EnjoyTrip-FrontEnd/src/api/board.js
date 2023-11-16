import { localAxios } from "@/util/http-commons";

const local = localAxios();

function listArticle(success, fail) {
  local.get(`/board/articles`).then(success).catch(fail);
}

function detailArticle(articleno, success, fail) {
  local.get(`/board/articles/${articleno}`).then(success).catch(fail);
}

function registArticle(article, success, fail) {
  console.log("boardjs article", article);
  local.post(`/board/articles`, JSON.stringify(article)).then(success).catch(fail);
}

// function getModifyArticle(articleno, success, fail) {
//   local.get(`/board/modify/${articleno}`).then(success).catch(fail);
// }

function modifyArticle(article, success, fail) {
  local.put(`/board/articles`, JSON.stringify(article)).then(success).catch(fail);
}

function deleteArticle(articleno, success, fail) {
  local.delete(`/board/articles/${articleno}`).then(success).catch(fail);
}

export {
  listArticle,
  detailArticle,
  registArticle,
  // getModifyArticle,
  modifyArticle,
  deleteArticle,
};
