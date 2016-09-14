class RemoveFieldNameFromSightings < ActiveRecord::Migration
  def change
    remove_column :sightings, :region_id, :integer
  end
end
