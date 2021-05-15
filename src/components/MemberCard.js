import React from 'react'
import Card from './Card'

const MemberCard = ({ member }) => (
  <Card className="mb-2 md:mb-2">
    <div className="flex items-center mt-2 md:block md:mt-2">
      <img
        className="w-40 h-40 mr-4 rounded-full md:mx-auto"
        src={member.image ? member.image : ' https://via.placeholder.com/150'}
        alt={member.name ? member.name : 'Jan Novák'}
      />
      <div className="md:pt-4 md:text-center">
        <p className="text-xl md:text-2xl">{member.name ? member.name : 'Jan Novák'}</p>
        <p className="text-sm text-gray-600 md:text-lg">
          {member.title ? member.title : 'Podtext'}
        </p>
      </div>
    </div>
  </Card>
)

export default MemberCard
