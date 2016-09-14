class AddRegionToSightings < ActiveRecord::Migration
  def change
    add_reference :sightings, :region, index: true, foreign_key: true
  end
end
