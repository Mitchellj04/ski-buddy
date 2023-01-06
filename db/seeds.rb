# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# Mountain.create(name: "Okemo", number_trails: , number_lifts:, elevation: ,averager_cost: )

Mountain.delete_all
Trail.delete_all
User.delete_all

stratton = Mountain.create(name: "Stratton",image_url: "https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/d6e2cdee28d3edc9ceee668f5b63e8f2.jpg", number_trails: 99, number_lifts: 11, elevation: 3940, average_cost: 167.00)
okemo = Mountain.create(name: "Okemo",image_url: "https://s3.onthesnow.com/images/trailmaps/vermont/okemo-mountain-resort/20161118205447/xlarge.jpg", number_trails: 127, number_lifts: 20, elevation: 3344,average_cost: 123.00 )
loon  = Mountain.create(name: "Loon",image_url: "https://www.loonmtn.com/documents/Loon/Maps/Winter_2223/Maps_Resort_1920.jpg", number_trails: 61, number_lifts: 10, elevation: 3065,average_cost: 65.00 )

stratton_trails1 = Trail.create(trail_name: "Black bear", difficulty: "More Difficult", groomed: true, mountain_id: stratton.id)
stratton_trails2 = Trail.create(trail_name: "Get My Drift", difficulty: "More Difficult", groomed: true, mountain_id: stratton.id)
stratton_trails3 = Trail.create(trail_name: "Drift Link", difficulty: "Easy", groomed: true, mountain_id: stratton.id)
stratton_trails4 = Trail.create(trail_name: "Lower East Meadow", difficulty: "Easy", groomed: true, mountain_id: stratton.id)
stratton_trails5 = Trail.create(trail_name: "Lower Switchback", difficulty: "Very Difficult", groomed: false, mountain_id: stratton.id)
stratton_trails6 = Trail.create(trail_name: "Bear Down", difficulty: "Expert", groomed: false, mountain_id: stratton.id)

okemo_trails1 = Trail.create(trail_name: "Fairway", difficulty: "Easy", groomed: true, mountain_id: okemo.id)
okemo_trails2 = Trail.create(trail_name: "Galaxy Bowl" , difficulty: "Easy", groomed: true, mountain_id: okemo.id)
okemo_trails3 = Trail.create(trail_name: "Blue Moon", difficulty: "More Difficult", groomed: true, mountain_id:  okemo.id)
okemo_trails4 = Trail.create(trail_name: "Rum Run", difficulty: "More Difficult", groomed: true, mountain_id:okemo.id)
okemo_trails5 = Trail.create(trail_name: "Black Out", difficulty: "Very Difficult", groomed: true, mountain_id:  okemo.id )
okemo_trails6 = Trail.create(trail_name: "Forrest Bump", difficulty: "Expert", groomed: false, mountain_id:  okemo.id)
okemo_trails7 = Trail.create(trail_name: "Upper Wild Thing", difficulty: "Expert", groomed: false, mountain_id:  okemo.id)

loon_trail = Trail.create(trail_name: "Dropline", difficulty: "Easy", groomed: true, mountain_id: loon.id)
loon_trail = Trail.create(trail_name: "Cruiser", difficulty: "More Difficult", groomed: true, mountain_id: loon.id)
loon_trail = Trail.create(trail_name: "Exodus", difficulty: "Easy", groomed: true, mountain_id: loon.id)
loon_trail = Trail.create(trail_name: "Bear Pause", difficulty: "More Difficult", groomed: false, mountain_id: loon.id)
loon_trail = Trail.create(trail_name: "Lower Flume", difficulty: "Very Difficult", groomed: true, mountain_id: loon.id)
loon_trail = Trail.create(trail_name: "Mike's Way", difficulty: "Very Difficult", groomed: false, mountain_id: loon.id)
loon_trail = Trail.create(trail_name: "Ripsaw", difficulty: "Expert", groomed: true, mountain_id: loon.id)

user_1 = User.create(username:"nicksav", password: "savboy123", name: "Nick Savakis", age: 23, bio: "I have been shredding my entire life. I recently went to Utah and shredded out there was a lot of fun" , experience_level: "Advanced")
# user_1 = User.create(username: , password: , name: , age: , bio: , experience_level:)

comment_1 = Comment.create(title: "Best Mountain Ever",description: "My friends and myself went skiing to this mountain every year and we have the best time there.", rating: 4.5, user_id: user_1.id, mountain_id: stratton.id)
comment_2 = Comment.create(title: "Small but greate", description: "This may be a small mountain but it is a great mountain. They have added a new 8 person bubble with heated seats in it. The price of the mountain is very fair as well", rating: 4.0, user_id: user_1.id, mountain_id:loon.id)
# comment_1 = Comment.create(title: ,description: , rating: , user_id: , mountain_id: )
# comment_1 = Comment.create(title: ,description: , rating: , user_id: , mountain_id: )
# comment_1 = Comment.create(title: ,description: , rating: , user_id: , mountain_id: )



