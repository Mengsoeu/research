const con = require("../config/db");

const load = (req, res) => {
  res.render("index");
};

const get_info = (req, res) => {
  const sql = "SELECT * FROM `user`";
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};


const create_info = (req, res) => {
  // console.log(req.body);
  const body = req.body;

  const sql = "insert into `user`(`full_name`,`gender`,`email`) values (?,?,?)";
  const myarr = [body.fullName, body.gender, body.email];
  con.query(sql, myarr, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // res.json(body);
      res.json(body);
      // res.redirect('/');
    }
  });
  
};

// const del_info = (req,res) => {
//   console.log(req.params.id);
//   // const item_id = [req.params.id];
//   // const sql = "delete from `user` where id = ?";
//   // con.query(sql,item_id,(err,result) => {
//   //   if(err){
//   //     throw err;
//   //   }else{
//   //     res.send(result);
      
//   //   }
//   // })
// }


module.exports = {
  create_info,
  get_info,
  load
  // del_info
};
