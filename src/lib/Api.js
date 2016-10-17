import 'whatwg-fetch';

const gitRepoApi = {
  getRepos: function (username) {
  	fetch(`/api/v1/user/repos?username=${username}`)
	  .then((response) => {
	    console.log(response);
	    return response.json();
    }).then((repojson) => {
      console.log(typeof repojson.repos);
      console.log(repojson.repos);
      if(repojson != null || repojson == '') {
        return repojson.repos;
      } else {
        console.log(error);
      }
    });
  },
};

const gitUserApi = {
  getUser: function (username) {
    fetch(`/api/v1/user/data?username=${username}`)
	  .then((response) => {
	    return response.json();
	  }).then((json) => {
	  	if(json.user != null) {
        return json.user;
	  	}	else {
        console.log(error);
	  	}
	  });
  },
  getFollowers: function(username) {
  	fetch(`/api/v1/user/followers?username=${username}`)
	  .then((response) => {
	    return response.json();
	  }).then((json) => {
	  	if(json.followers != null || json.followers != '') {
		      return json.followers;
        }
	  	} else {
        console.log(error);
	  	}
	  });
  },
  getFollowing: function(username) {
  	fetch(`/api/v1/user/following?username=${username}`)
	  .then((response) => {
	    return response.json();
	  }).then((json) => {

	  	if(json.following != null || json.following != '') {
		      return json.following;
      }	else {
        console.log(error);
	  	}
	  });
  },
  getOrgs: function(username) {
  	fetch(`/api/v1/user/organizations?username=${username}`)
	  .then((response) => {
	    return response.json();
	  }).then((json) => {
	  	if(json.following != null || json.following != '') {
        return json.orgs,
	  	}	else {
        console.log(error);
	  	}
	  });
  }
};

export default gitRepoApi;

