# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: animal_id is the name of the foreign key. The foreign key would belong to the sightings model 

  Researched answer:



2. Which routes must always be passed params and why?

  Your answer: update, delete, patch because it needs to know which object its modifying 

  Researched answer:



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:  get '/home/:guess' => 'main#game'



4. Name three rails generator commands. What is created by each?

  Your answer: model, resource, controller. The model generates a table with the attributes and data types for them. The controller generates a controller, and your views. Resource generates your model, controller, and sets up your routes for you.

  Researched answer: 



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   

retrieves the information from the users path

/users/1      method="GET"   
retrieves the information 

/users/new    method="GET"   

/users/       method="POST"     

/users/1      method="PUT"    

/users/1      method="DELETE"
