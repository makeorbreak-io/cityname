module.exports = app => {
  const WCs = app.db.models.WCs;
  const WCCategories = app.db.models.WCCategories;
  const WCViews = app.db.models.WCViews;

  app.route('/wcs')
    // .all(app.auth.authenticate())
    /**
     * @api {get} /wcs List all WCs
     * @apiGroup WCs
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *    {"Authorization": "JWT xyz.abc.123.hgf"}
     * @apiSuccess {Object[]} WCs's list
     * @apiSuccess {Number} WCs.id WCs id
     * @apiSuccess {String} WCs.name WCs title
     * @apiSuccess {Date} WCss.updated_at Update's date
     * @apiSuccess {Date} WCss.created_at Register's date
     * @apiSuccess {Number} WCss.user_id Id do usuário
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      "id": 1,
     *      "name": "Study",
     *      "updated_at": "2016-02-10T15:46:51.778Z",
     *      "created_at": "2016-02-10T15:46:51.778Z",
     *      "user_id": 1
     *    }]
     * @apiErrorExample {json} List error
     *    HTTP/1.1 412 Precondition Failed
     */
    .get((req, res) => {
      let lat = req.query.lat;
      let lng = req.query.lng;

      if (!lat || !lng) {
        lat = '41.15';
        lng = '-8.61024';
      }
      /* WCs.findAll({
        include: [WCCategories],
        // where: { user_id: req.user.id },
      }) */
      WCs.getPlaceByLatLng(lat, lng, '')
      .then(result => {
        result.pop();
        res.json(result[0]);
      })
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
    });
    /**
     * @api {post} /WCss Register a new WCs
     * @apiGroup WCss
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *    {"Authorization": "JWT xyz.abc.123.hgf"}
     * @apiParam {String} title WCs title
     * @apiParamExample {json} Input
     *    {"title": "Study"}
     * @apiSuccess {Number} id WCs id
     * @apiSuccess {String} title WCs title
     * @apiSuccess {Boolean} done=false WCs is done?
     * @apiSuccess {Date} updated_at Update's date
     * @apiSuccess {Date} created_at Register's date
     * @apiSuccess {Number} user_id User id
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "id": 1,
     *      "title": "Study",
     *      "done": false,
     *      "updated_at": "2016-02-10T15:46:51.778Z",
     *      "created_at": "2016-02-10T15:46:51.778Z",
     *      "user_id": 1
     *    }
     * @apiErrorExample {json} Register error
     *    HTTP/1.1 412 Precondition Failed
     */
    /* .post((req, res) => {
      req.body.user_id = req.user.id;
      WCs.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });*/

  app.route('/wcs/me')
    .all(app.auth.authenticate())
    .get((req, res) => {
      WCs.findAll({
        include: [WCCategories],
        where: { user_id: req.user.id },
      })
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
    });

  app.route('/wcs/categories')
    /**
     * @api {get} /wcs/categories List all WCs categories
     * @apiGroup WCs
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *    {"Authorization": "JWT xyz.abc.123.hgf"}
     * @apiSuccess {Object[]} WCCategories's list
     * @apiSuccess {Number} WCCategories.id WCs id
     * @apiSuccess {String} WCCategories.name WCs title
     * @apiSuccess {Date} WCCategories.updated_at Update's date
     * @apiSuccess {Date} WCCategories.created_at Register's date
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      "id": 1,
     *      "name": "Full Bathroom",
     *      "updated_at": "2016-02-10T15:46:51.778Z",
     *      "created_at": "2016-02-10T15:46:51.778Z",
     *    }]
     * @apiErrorExample {json} List error
     *    HTTP/1.1 412 Precondition Failed
     */
    .get((req, res) => {
      WCCategories.findAll()
      .then(result => {
        if (result) {
          res.json(result);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
    });

  app.route('/wcs/views')
    .get((req, res) => {
      WCViews.findAll()
      .then(result => {
        if (result) {
          res.json(result);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
    });

  app.route('/wcs/:id')
    .all(app.auth.authenticate())
    /**
     * @api {get} /wcs/:id Get a WCs
     * @apiGroup WCss
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *    {"Authorization": "JWT xyz.abc.123.hgf"}
     * @apiParam {id} id WCs id
     * @apiSuccess {Number} id WCs id
     * @apiSuccess {String} title WCs title
     * @apiSuccess {Boolean} done WCs is done?
     * @apiSuccess {Date} updated_at Update's date
     * @apiSuccess {Date} created_at Register's date
     * @apiSuccess {Number} user_id User id
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "id": 1,
     *      "title": "Study",
     *      "done": false
     *      "updated_at": "2016-02-10T15:46:51.778Z",
     *      "created_at": "2016-02-10T15:46:51.778Z",
     *      "user_id": 1
     *    }
     * @apiErrorExample {json} WCs not found error
     *    HTTP/1.1 404 Not Found
     * @apiErrorExample {json} Find error
     *    HTTP/1.1 412 Precondition Failed
     */
    .get((req, res) => {
      WCs.findOne({ where: {
        id: req.params.id,
        user_id: req.user.id,
      } })
      .then(result => {
        if (result) {
          res.json(result);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
    })
    /**
     * @api {put} /WCss/:id Update a WCs
     * @apiGroup WCss
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *    {"Authorization": "JWT xyz.abc.123.hgf"}
     * @apiParam {id} id WCs id
     * @apiParam {String} title WCs title
     * @apiParam {Boolean} done WCs is done?
     * @apiParamExample {json} Input
     *    {
     *      "title": "Work",
     *      "done": true
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 204 No Content
     * @apiErrorExample {json} Update error
     *    HTTP/1.1 412 Precondition Failed
     */
    .put((req, res) => {
      WCs.update(req.body, { where: {
        id: req.params.id,
        user_id: req.user.id,
      } })
      .then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
    })
    /**
     * @api {delete} /WCss/:id Remove a WCs
     * @apiGroup WCss
     * @apiHeader {String} Authorization Token of authenticated user
     * @apiHeaderExample {json} Header
     *    {"Authorization": "JWT xyz.abc.123.hgf"}
     * @apiParam {id} id WCs id
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 204 No Content
     * @apiErrorExample {json} Delete error
     *    HTTP/1.1 412 Precondition Failed
     */
    .delete((req, res) => {
      WCs.destroy({ where: {
        id: req.params.id,
        user_id: req.user.id,
      } })
      .then(result => res.sendStatus(204))
      .catch(error => {
        res.status(412).json({ msg: error.message });
      });
    });
};
