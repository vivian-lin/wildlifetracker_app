class RemoveFieldNameFromTableName < ActiveRecord::Migration
  def change
    remove_column :sightings, :region, :string
  end
end
