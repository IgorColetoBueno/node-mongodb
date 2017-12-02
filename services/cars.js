module.exports.find = function(req,res){
    res.render('cars_list');
};

module.exports.new = function(req,res){
    res.render('cars_new');
};
module.exports.edit = function(req,res){
    res.render('cars_edit', req.params.id);
};
module.exports.delete = function(req,res){
    res.render('cars_delete', req.params.id);
};