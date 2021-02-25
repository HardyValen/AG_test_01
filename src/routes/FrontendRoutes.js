const url = "/";

const FrontendRoutes = {
  dealer: {
    home: url
  },
  outlet: {
    home: url + "outlet/"
  },
  cars: {
    xl7: {
      home: url + "cars/xl7/"
    }
  }
};

// FrontendRoutes.outlet.home = url;
// FrontendRoutes.viewPost = url + "view-post/";
// FrontendRoutes.createPost = url + "create-post/";
// FrontendRoutes.updatePost = url + "update-post/";

export default FrontendRoutes;