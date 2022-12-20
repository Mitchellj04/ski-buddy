class MountainSerializer < ActiveModel::Serializer
  attributes :id, :name, :number_trails, :number_lifts, :elevation, :average_ticket
  has_many :trails

  def average_ticket
    "Average Ticket Cost $#{self.object.average_cost}"
  end
end