use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct AnnieEhler {
    pub experience: String,
    pub skills: Vec<String>,
    pub work: {
      	pub experience: Vec<String>,
      	pub skills: (Vec<String>, Vec<String>),
      	pub publications: Vec<String>,
		},
	  pub education: {
				pub degrees: Vec<String>,
				pub institutions: Vec<String>,
		},
		pub contact: {
				pub email: String,
				pub phone: String,
		},
}
