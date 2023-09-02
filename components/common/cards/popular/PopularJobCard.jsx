import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'


// const sampleData = {
//   job_id: 1,
//   employer_logo: 'https://www.pngwing.com/en/free-png-spjgq', // Replace with a valid image URL
//   employer_name: 'Sample Company',
//   job_title: 'Sample Job Title',
// };

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {


  // const item = sampleData;

  return (
    <TouchableOpacity
      key={item.job_id}
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
       <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          style={styles.logoImage} />


      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text> 

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
        {item.job_title}
        <Text style={styles.location}>{item.job_country}</Text>
        </Text>
      </View>   

    </TouchableOpacity>
  )
}




export default PopularJobCard