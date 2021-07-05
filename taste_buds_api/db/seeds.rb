# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Review.delete_all
Recipe.delete_all



20.times do
    created_at = Faker::Date.backward(365 * 5)
  
    # Faker is a module. We are accessing classes on the module
    # that will create fake data. No need to require the faker gem at the
    # top of this script because we can access all gems in the Gemfile
    # from anywhere.
    r = Recipe.create(
      image_url: Faker::LoremFlickr.image(size: "50x60", search_terms: ['dishes']), 
      story: Faker::Quote.famous_last_words,
      title: Faker::Food.dish,
      description: Faker::Food.description,
      serving_size: Faker::Number.between(from: 1, to: 50), 
      is_salty: Faker::Boolean.boolean,
      is_spicy: Faker::Boolean.boolean,
      is_sweet: Faker::Boolean.boolean,
      created_at: created_at,
      updated_at: created_at,
    #   # We can use the user instance for the "user" attribute rather than using "user_id"
    #   user: users.sample,
    )
    if r.valid?
      # With the writer q.answers=(objects), the answer instances that are being assigned
      # to the question will be saved to the database and associated to the question
      r.reviews = rand(0..15).times.map do
        Review.new(
          body: Faker::Quote.jack_handey,
          rating: Faker::Number.between(from: 0, to: 5)
        #   user: users.sample,
        )
      end
      
    end
  end

    puts Cowsay.say("Generated #{Recipe.count} recipes", :koala)
    puts Cowsay.say("Generated #{Review.count} reviews", :stegosaurus)