json.extract! sighting, :id, :animal_id, :date, :time, :latitude, :longitude, :created_at, :updated_at
json.url sighting_url(sighting, format: :json)
